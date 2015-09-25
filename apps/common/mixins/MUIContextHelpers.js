// Copyright 2015, EMC, Inc.

'use strict';

import { PropTypes } from 'react';
import { ThemeManager } from 'material-ui/lib/styles';
import lightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';

export default {

  get muiTheme() {
    return ThemeManager.getMuiTheme(this.customRawTheme || lightRawTheme);
  },

  muiContextTypes(contextTypes) {
    contextTypes = contextTypes || {};
    contextTypes.muiTheme = contextTypes.muiTheme || PropTypes.object;
    return contextTypes;
  },

  muiContext(context) {
    context = context || {};
    context.muiTheme = this.muiTheme || context.muiTheme;
    return context;
  }

};
