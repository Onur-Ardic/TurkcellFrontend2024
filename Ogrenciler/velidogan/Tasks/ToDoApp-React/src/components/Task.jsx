import React from 'react'


function Task({task,deleteTask}) {
  return (
    <>
        <li className="task list-group-item d-flex justify-content-between align-items-center">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="1" />
                <label className="form-check-label ${checked}" htmlFor="1">
                    {task.text}
                </label>
            </div>
            <div className="dropdown">
                <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <i className="fa-solid fa-ellipsis"></i>                                
                </button>
                <ul className="dropdown-menu">
                    
                </ul>
            </div>
            <li><a className="dropdown-item" href="#" onClick={(e)=>{deleteTask(task.id)}}><i className="fa-solid fa-trash"></i> Sil</a></li>
                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pen-nib"></i> Düzenle</a></li>
        </li>
    </>
  )
}

export default Task