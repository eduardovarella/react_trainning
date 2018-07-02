import React from 'react';
import { mount } from 'enzyme';

import CommentsList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    const initailState = {
        comments: ['Comment 1', 'Comment 2']
    };

    wrapped = mount (
        <Root initailState={initailState}>
            <CommentsList />
        </Root>
    )
})

it('creates one LI per comment', () => {

});