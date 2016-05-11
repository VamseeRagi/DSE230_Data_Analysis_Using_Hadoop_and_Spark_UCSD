define("bundles/ondemand/components/programming/ProgrammingInstructions",["require","exports","module","q","react-with-addons","bundles/phoenix/components/OrigamiRegion","bundles/phoenix/lib/waitForStores","bundles/programming/promises/immediate/instructions","bundles/programming/promises/learnerAssignment","bundles/programming/views/instructions","bundles/verificationDisplay/models/verificationDisplay","pages/open-course/common/models/itemMetadata"],function(require,exports,module){"use strict";function _defaults(e,r){for(var o=Object.getOwnPropertyNames(r),t=0;t<o.length;t++){var i=o[t],n=Object.getOwnPropertyDescriptor(r,i);n&&n.configurable&&void 0===e[i]&&Object.defineProperty(e,i,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var n=function(){function defineProperties(n,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}return function(e,t,i){return t&&defineProperties(e.prototype,t),i&&defineProperties(e,i),e}}(),r=function get(o,u,c){var i=!0;e:for(;i;){var t=o,s=u,a=c;i=!1,null===t&&(t=Function.prototype);var e=Object.getOwnPropertyDescriptor(t,s);if(void 0===e){var n=Object.getPrototypeOf(t);if(null===n)return void 0;o=n,u=s,c=a,i=!0,e=n=void 0;continue e}if("value"in e)return e.value;var r=e.get;if(void 0===r)return void 0;return r.call(a)}},t=require("q"),e=require("react-with-addons"),i=require("bundles/phoenix/components/OrigamiRegion"),o=require("bundles/phoenix/lib/waitForStores"),s=require("bundles/programming/promises/immediate/instructions"),a=require("bundles/programming/promises/learnerAssignment"),u=require("bundles/programming/views/instructions"),c=require("bundles/verificationDisplay/models/verificationDisplay"),p=require("pages/open-course/common/models/itemMetadata"),l=function(o){function ProgrammingInstructions(){_classCallCheck(this,ProgrammingInstructions),r(Object.getPrototypeOf(ProgrammingInstructions.prototype),"constructor",this).apply(this,arguments),this.state={instructions:null,learnerAssignment:null}}return _inherits(ProgrammingInstructions,o),n(ProgrammingInstructions,[{key:"componentDidMount",value:function componentDidMount(){this.fetchData()}},{key:"fetchData",value:function fetchData(){var e=this;if("programming"===this.props.itemMetadata.getTypeName()){var i=s({itemMetadata:this.props.itemMetadata,courseId:this.props.itemMetadata.get("course.id"),itemId:this.props.itemMetadata.get("id")});t(i).then(function(t){e.setState({instructions:t})})}else{var n=a({itemMetadata:this.props.itemMetadata});t(n).then(function(t){e.setState({instructions:t.submissionLearnerSchema.get("instructions"),learnerAssignment:t})})}}},{key:"render",value:function render(){var t={itemMetadata:this.props.itemMetadata,instructions:this.state.instructions,learnerAssignment:this.state.learnerAssignment,verificationDisplay:this.props.verificationDisplay};return e.createElement("div",{className:"rc-ProgrammingInstructions"},this.state.instructions&&e.createElement(i,{viewOptions:t,ViewClass:u,renderOnce:!0}))}}],[{key:"propTypes",value:{itemMetadata:e.PropTypes.instanceOf(p).isRequired,verificationDisplay:e.PropTypes.instanceOf(c).isRequired},enumerable:!0}]),ProgrammingInstructions}(e.Component);module.exports=o(l,["VerificationStore"],function(e){var t=e.VerificationStore;return{verificationDisplay:t.getVerificationDisplay()}})});