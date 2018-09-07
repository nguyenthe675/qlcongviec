import React from 'react';
import ContentHeader from './ContentHeader';
import ContentBody from './ContentBody';
class BaseContent extends React.Component {
  render() {
    return (
        <div className="content-wrapper">
            <div className="container-fluid">
                <ContentHeader></ContentHeader>
                <ContentBody></ContentBody>
            </div>
        </div>
    );
  }
}

export default BaseContent;
