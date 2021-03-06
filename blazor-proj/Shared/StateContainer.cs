using System;
using System.Collections.Generic;

public class StateContainer
{
  private static int initialSize = 200000;
  private int id = 1;
  public List<Item> items { get; set; } = new List<Item>();

  public StateContainer()
  {
    for (int i = 0; i < initialSize; i += 1)
    {
      items.Add(new Item(id++, $"Task #{i}"));
    }
  }

  public event Action OnChange;

  private void addItem(Item item)
  {
    items.Add(item);
  }

  public void addItem(string title, string content)
  {
    Item item = new Item(id++, title, content);
    addItem(item);
    NotifyStateChanged();
  }

  public void removeItem(int id)
  {
    foreach (var item in items)
    {
      if (item.id == id)
      {
        items.Remove(item);
        break;
      }
    }
    NotifyStateChanged();
  }

  private void NotifyStateChanged() => OnChange?.Invoke();
}