using Microsoft.EntityFrameworkCore;
using POS.Domain.Entities;

namespace POS.Infrastructure.Data;

public class POSDbContext : DbContext
{
    public POSDbContext(DbContextOptions<POSDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<MenuItem> MenuItems { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderItem> OrderItems { get; set; }
    public DbSet<InventoryTransaction> InventoryTransactions { get; set; }
    public DbSet<Expense> Expenses { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure User
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Username).IsRequired().HasMaxLength(50);
            entity.HasIndex(e => e.Username).IsUnique();
            entity.Property(e => e.PasswordHash).IsRequired();
            entity.Property(e => e.Role).IsRequired().HasMaxLength(20);
        });

        // Configure MenuItem
        modelBuilder.Entity<MenuItem>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
            entity.Property(e => e.Price).HasColumnType("decimal(10,2)");
            entity.Property(e => e.Cost).HasColumnType("decimal(10,2)");
        });

        // Configure Order
        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.OrderNumber).IsRequired().HasMaxLength(20);
            entity.HasIndex(e => e.OrderNumber).IsUnique();
            entity.Property(e => e.Subtotal).HasColumnType("decimal(10,2)");
            entity.Property(e => e.Discount).HasColumnType("decimal(10,2)");
            entity.Property(e => e.Total).HasColumnType("decimal(10,2)");
            entity.Property(e => e.PaymentMethod).IsRequired().HasMaxLength(10);
            entity.Property(e => e.Status).HasMaxLength(20);
            
            entity.HasOne(e => e.Cashier)
                  .WithMany()
                  .HasForeignKey(e => e.CashierId);
        });

        // Configure OrderItem
        modelBuilder.Entity<OrderItem>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.UnitPrice).HasColumnType("decimal(10,2)");
            entity.Property(e => e.TotalPrice).HasColumnType("decimal(10,2)");
            
            entity.HasOne(e => e.Order)
                  .WithMany(o => o.OrderItems)
                  .HasForeignKey(e => e.OrderId);
                  
            entity.HasOne(e => e.MenuItem)
                  .WithMany()
                  .HasForeignKey(e => e.MenuItemId);
        });

        // Configure InventoryTransaction
        modelBuilder.Entity<InventoryTransaction>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Reason).HasMaxLength(255);
            
            entity.HasOne(e => e.MenuItem)
                  .WithMany()
                  .HasForeignKey(e => e.MenuItemId);
        });

        // Configure Expense
        modelBuilder.Entity<Expense>(entity =>
        {
            entity.HasKey(e => e.Id);
            entity.Property(e => e.Description).IsRequired().HasMaxLength(255);
            entity.Property(e => e.Amount).HasColumnType("decimal(10,2)");
            entity.Property(e => e.Category).IsRequired().HasMaxLength(50);
        });
    }
}
