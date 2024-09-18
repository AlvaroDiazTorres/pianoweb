import { expect, test } from 'vitest'
import getNoteFromKey from '../noteUtils'

test('Si le paso la letra a devolverá C4', ()=>{
    let note = getNoteFromKey('a')
    expect(note).toBe('C4')
})