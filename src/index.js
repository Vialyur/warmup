module.exports = function warmup(temperature) {
// Перевод градусов Цельсия в градусы Фаренгейта
  let farenheit = temperature*9/5+32;
  return farenheit;
}