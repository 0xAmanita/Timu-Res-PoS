namespace POS.Domain.Entities;

public class Order
{
    public int Id { get; set; }
    public string OrderNumber { get; set; } = string.Empty;
    public int CashierId { get; set; }
    public decimal Subtotal { get; set; }
    public decimal Discount { get; set; }
    public decimal Total { get; set; }
    public string PaymentMethod { get; set; } = string.Empty; // Cash or Gcash
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;
    public string Status { get; set; } = "pending"; // pending, completed, cancelled
    
    // Navigation properties
    public User? Cashier { get; set; }
    public List<OrderItem> OrderItems { get; set; } = new();
}
