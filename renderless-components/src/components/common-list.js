export default {
  name: "common-list",
  props: {
    value: Number,
  },
  render() {
    return (
      <div class="box-card" style="padding: 14px;">
        <span>{this.value}</span>
      </div>
    );
  },
};
