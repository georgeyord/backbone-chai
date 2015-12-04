define([
    'jsx!views/ItemView',
    'backbone',
    'react',
    'reactdom'
], function(ItemView, Backbone, React, ReactDOM) {
    return Backbone.View.extend({
        el: $('#content-placeholder'),
        events: {
            'change': "render"
        },

        initialize: function(options) {
            this.initializeTemplates();
            this.renderLoading();
        },

        initializeTemplates: function(options) {
          var _this = this;
            this.listTemplate = React.createClass({
                render: function() {
                    return <div className="item-list">
                      {
                        this.props.collection.map(function(item, key) {
                          // First row has the labels
                          if(key == 0) return;
                          return React.createElement(_this.itemTemplate, item.toJSON());
                        })
                      }
                    </div>
                }
            });
            this.loadingTemplate = React.createClass({
                render: function() {
                    return <h2>
                      {this.props.label}
                    </h2>
                }
            });
            var itemView = new ItemView();
            this.itemTemplate = itemView.itemTemplate;
        },

        renderLoading: function(label) {
            if (_.isUndefined(label)) {
                label = "Loading...";
            }
            ReactDOM.render(
                React.createElement(this.loadingTemplate, {
                    label: label
                }),
                this.$el[0]
            );
            return this;
        },

        render: function(collection) {
            var _this = this,
                htmlList = "";
            ReactDOM.render(
                React.createElement(this.listTemplate, {
                    collection: collection
                }),
                this.$el[0]
            );
            // this.model.toJSON()
            // this.models.toJSON()
            // this.$el.html(this.listTemplate({list: htmlList}));
            //   var props = level.toJSON();
            //   ReactDOM.render(
            //     React.createElement(this.outputBox, {description: props.description, id: props.id}),
            //     this.$el[0]
            //   );
            // return this;
        },

        renderItem: function(item) {
            var item = new ItemView({
                model: item
            });
            return item.renderStatic();
        }

    });
});
