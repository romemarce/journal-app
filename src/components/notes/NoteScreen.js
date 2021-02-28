import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          placeholder="what happend today"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://i.pinimg.com/originals/49/a7/81/49a7818b55367a975dc0f1e29ff599c5.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
}
