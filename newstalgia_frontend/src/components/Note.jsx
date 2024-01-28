import { useState, useRef } from "react"
import Draggable, {DraggableCore} from "react-draggable";

export default function Note({ onClose }) {
    return (
        <Draggable>
            <div className="sticky-note">
                <div className="sticky-note-header">
                    <div className="close" onClick={onClose}>
                        &times;
                    </div>
                </div>
                <textarea className="note-textarea" name="" id="" cols="30" rows="10"></textarea>
            </div>
        </Draggable>
    )
}


