define([
    'backbone',
    'react',
    'reactdom'
], function(Backbone, React, ReactDOM) {
    return Backbone.View.extend({
        el: $('#output-placeholder'),

        initialize: function() {
            this.outputBox = React.createClass({
                render: function() {
                    return <h2>{this.props.label}</h2>
                }
            });
        },

        render: function(label) {
            if (_.isUndefined(label)) {
                label = "Loading...";
            }
            ReactDOM.render(
                React.createElement(this.outputBox, {
                    label: label
                }),
                this.$el[0]
            );
            return this;
        }

    });
});
