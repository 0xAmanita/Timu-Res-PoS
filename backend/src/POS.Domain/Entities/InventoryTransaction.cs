namespace POS.Domain.Entities;

public class InventoryTransaction
{
    public int Id { get; set; }
    public int MenuItemId { get; set; }
    public int ChangeQuantity { get; set; }
    public string Reason { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    // Navigation property
    public MenuItem? MenuItem { get; set; }
}
