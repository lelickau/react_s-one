import profileReducer, { addPostActionCreater, deletePost } from "./profileReducer";

import { render, screen } from '@testing-library/react';

let state = {
        posts: [
            {post:'Hello Tom' , id:1, likesCount: 0},
            {post:'hi Tom How are you?' , id:2, likesCount: 0},
            {post:'hi Tom What do you do?' , id:3, likesCount: 0},
            {post:'hi Tom I am fine' , id:4, likesCount: 0},
        ],
    };

test('проверка на добавление поста', () => {
    //1. подготовка данных
    let action = addPostActionCreater('new text');
    // 2. action
    let newState = profileReducer(state, action);
    //3. ожидание
    expect(newState.posts.length).toBe(5);
});

test('проверка на добавление корректного поста', () => {
    let action = addPostActionCreater('new text');

    let newState = profileReducer(state, action);

    expect(newState.posts[4].post).toBe('new text');
});

test('проверка на удаление поста', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});