// Copyright 2015, EMC, Inc.

'use strict';

/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import mixin from 'common-web-ui/lib/mixin';
import PageHelpers from 'common-web-ui/mixins/PageHelpers';
/* eslint-enable no-unused-vars */

import {} from 'material-ui';
import WorkflowsGrid from './WorkflowsGrid';

@mixin(PageHelpers)
export default class Workflows extends Component {

  render() {
    let params = this.props.params || {};
    let nodeId = this.props.nodeId || params.nodeId;
    return (
      <div className="Workflows">
        {nodeId ?
          this.renderBreadcrumbs(
            {href: '', label: 'Dashboard'},
            {href: 'nodes', label: 'Nodes'},
            {href: 'nodes/' + nodeId, label: nodeId},
            'Workflows'
          ) :
          this.renderBreadcrumbs({href: '', label: 'Dashboard'}, 'Workflows')
        }
        <WorkflowsGrid nodeId={nodeId} />
      </div>
    );
  }

}
