export function getRandom(list) {
  if (!list || list.length === 0) return null;
  const rand = list[Math.floor(Math.random() * list.length)];
  return rand;
}

export function formatCategoriesStr(categories = {}) {
  return categories.filter(({ isChecked }) => isChecked).map(o => o.id).join(',');
}
