import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://i.pinimg.com/originals/49/a7/81/49a7818b55367a975dc0f1e29ff599c5.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">Ex labore dolore cupidatat laborum sit pariatur.</p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>23</h4>
      </div>
    </div>
  );
}
