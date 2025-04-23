import React from 'react';
import { useState } from 'react';
import './field.scss';
import PropTypes from 'prop-types';

export default function Field(props) {
  const [list, setList] = useState(props.list);
  const [chosenItem, setChosenItem] = useState({});
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  function mouseOverHandler(e) {
    const coords = e.target.getBoundingClientRect();
    const gap = 0;
    const width = coords.width;
    const height = coords.height;
    const rightElement = document.elementFromPoint(
      coords.left + gap + width,
      coords.top
    );
    const leftElement = document.elementFromPoint(
      coords.left - gap - width,
      coords.top
    );
    const topElement = document.elementFromPoint(
      coords.left,
      coords.top - gap - height
    );
    const bottomElement = document.elementFromPoint(
      coords.left,
      coords.top + gap + height
    );

    if (
      (rightElement && rightElement.classList.contains('item-blank')) ||
      (leftElement && leftElement.classList.contains('item-blank')) ||
      (bottomElement && bottomElement.classList.contains('item-blank')) ||
      (topElement && topElement.classList.contains('item-blank'))
    ) {
      console.log('making draggable true');
      e.target.style.cursor = 'grab';
      e.target.draggable = true;
    } else {
      e.target.draggable = false;
    }
  }
  function mouseOut(element) {
    element.style.cursor = 'not-allowed';
    element.draggable = false;
  }
  function dragOver(e) {
    e.preventDefault();
  }

  function dragStart(item) {
    setChosenItem(item);
    console.log('dragStart ChosenItem', item);
  }
  function checkRightPlace(item, array) {
    const index = array.findIndex(obj => obj.value === item.value);
    if (item.value === index + 1) {
      return true;
    } else {
      return false;
    }
  }
  function dropHandler(e, array, blankItem) {
    e.preventDefault();
    console.log('dropHandler');
    const blankItemOrder = blankItem.order;
    const chosenItemOrder = chosenItem.order;
    const arrayToChange = array;
    arrayToChange[blankItem.order].order = chosenItemOrder;
    arrayToChange[chosenItem.order].order = blankItemOrder;
    arrayToChange.sort((a, b) => (a.order > b.order ? 1 : -1));
    arrayToChange.forEach(item => {
      if (checkRightPlace(item, arrayToChange)) {
        item.class = 'item green';
      } else {
        item.class = 'item coral';
      }
    });
    setList(list => [...arrayToChange]);
    setCounter(counter => counter + 1);
  }
  return (
    <>
      <header className="header__game">
        <div className="header__timer"></div>
        <div className="header__counter">Step counter: {counter}</div>
      </header>
      <section className="field">
        {list.map(function (point) {
          if (point.value === 0) {
            return (
              <div
                onDrop={e => dropHandler(e, list, point)}
                onDragOver={e => dragOver(e)}
                key={point.id}
                className="item-blank"
              ></div>
            );
          } else {
            return (
              <div
                key={point.id}
                onMouseOut={e => mouseOut(e.target)}
                onMouseOver={e => mouseOverHandler(e)}
                onDragStart={() => dragStart(point)}
                className={point.class}
                draggable={false}
              >
                {point.value}
              </div>
            );
          }
        })}
      </section>
    </>
  );
}

Field.propTypes = {
  list: PropTypes.array.isRequired,
};
