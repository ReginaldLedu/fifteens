import React from 'react';
import Field from '../components/field/field.jsx';

export default function Main() {
  function generateRandomArray(max) {
    let array = Array.from({ length: max }, (_, index) => index);
    // Функция для перемешивания массива (алгоритм Фишера-Йетса)
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Меняем местами
    }
    array = array.map(function (item) {
      const obj = {
        id: array.indexOf(item),
        order: array.indexOf(item),
        value: item,
        class: 'item coral',
      };
      return obj;
    });
    return array;
  }
  function generateOrderedArray(max) {
    const array = Array.from({ length: max - 1 }, (_, index) => index + 1);

    return array;
  }

  const maxValue = 16;
  const randomArray = generateRandomArray(maxValue);
  const orderedArray = generateOrderedArray(maxValue);
  console.log('randomArray', randomArray);
  console.log('orderedArray', orderedArray);
  return (
    <>
      <Field list={randomArray} orderedList={orderedArray} />
    </>
  );
}
