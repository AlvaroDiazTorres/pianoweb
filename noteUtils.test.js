import { expect, test } from 'vitest'
import getNoteFromKey from '../noteUtils'

test('Si le paso la letra a devolverá C4', () => {
    let note = getNoteFromKey('a')
    expect(note).toBe('C4')
})

test('Si le paso la letra A mayúscula devolverá C4', () => {
    let note = getNoteFromKey('A')
    expect(note).toBe('C4')
})

test('Tecla null', () => {
    let note = getNoteFromKey(null)
    expect(note).toBeUndefined
})

test('No pasas ninguna tecla', () => {
    let note = getNoteFromKey()
    expect(note).toBeUndefined
})
test('Tecla undefined', () => {
    let note = getNoteFromKey(undefined)
    expect(note).toBeUndefined
})