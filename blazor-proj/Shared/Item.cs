public class Item
{
  public int id { get; set; }
  public string title { get; set; }
  public string content { get; set; }

  public Item(int id, string title, string content = null)
  {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}