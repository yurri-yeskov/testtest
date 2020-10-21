import React from 'react';
import PropTypes from 'prop-types';

import Comment from '@components/Comment';

const ProductCommentRepliesListItem = (props) => {
    return (
        <div className="list__item product-comments-list__item">
            <Comment type="reply" {...props} />
        </div>
    );
};

ProductCommentRepliesListItem.propTypes = {};

export default ProductCommentRepliesListItem;
