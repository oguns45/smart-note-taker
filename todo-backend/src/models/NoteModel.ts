import {model, Schema, Types} from 'mongoose'
import { NoteInterface } from '../utils/Interfaces'
import { title } from 'process'

const noteSchema = new Schema<NoteInterface>({

    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true

    },
    date:{
        type:Date,
        default:Date.now
    },
    time:{
        type:Date,
        default:Date.now

    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})







export default model('NoteModel', noteSchema)