export default {
  name: "renderless-list",
  functional: true,
  props: {
    value: Number,
  },
  render(h, context) {
    return (
      <div class="box-card" style="padding: 14px;">
        <span>{context.props.value}</span>
      </div>
    );
  },
};
