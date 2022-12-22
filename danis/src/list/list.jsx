import React from 'react';
import Task from '../task';

export default function List() {
  return (
    <div>
      <Task taskDescription="Пойти гулять " />
      <Task taskDescription="Учить React " />
    </div>
  );
}
