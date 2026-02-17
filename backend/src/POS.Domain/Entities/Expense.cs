namespace POS.Domain.Entities;

public class Expense
{
    public int Id { get; set; }
    public string Description { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string Category { get; set; } = string.Empty; // Rent, Utilities, Supplies
    public DateTime Date { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
