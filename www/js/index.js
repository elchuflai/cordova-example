/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {


      var homeView = new HomeView();

      window.viewNavigator = new ViewNavigator('body');
      window.viewNavigator.pushView(homeView);
      document.addEventListener("backbutton", this.onBackKey, false);

    },

    onBackKey: function (event) {
      if (window.viewNavigator.history.length > 1) {
        event.preventDefault();
        window.viewNavigator.popView();
        return false;
      }
      navigator.app.exitApp();
    }

};
