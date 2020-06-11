import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map(i => ({
    title: `포스트 #${i}`,
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque luctus fringilla. Nulla dictum accumsan augue id elementum. Nullam tempor eleifend felis a interdum. Mauris ut consectetur mauris. Donec aliquet sem eget tempor rhoncus. Proin feugiat eu velit id luctus. Mauris semper tincidunt nisl, vitae finibus nisl blandit ac. Mauris auctor, neque eu cursus ultricies, massa quam facilisis eros, et eleifend nulla risus nec ligula. Suspendisse potenti. Quisque urna tortor, posuere eget egestas sit amet, posuere quis ante.       Nunc posuere lacinia dolor vitae rhoncus. Donec aliquam molestie ligula. Sed maximus turpis nisl, in convallis magna aliquam vitae. Nunc vel viverra leo. Aliquam commodo mi arcu, nec semper ipsum interdum a. Suspendisse facilisis elit mauris, id porta diam auctor a. Morbi bibendum justo mollis rhoncus dapibus. Duis vel tincidunt ipsum. Nulla et ex congue, placerat ipsum nec, porttitor risus. Pellentesque auctor urna congue venenatis congue. Vivamus ac lectus lorem. Quisque mollis nibh ac orci accumsan, vitae imperdiet nulla efficitur.Morbi mollis convallis erat a lacinia. Nunc luctus sed diam nec ultricies. Donec bibendum tortor sed ligula consequat porttitor. Morbi ac erat at odio rutrum luctus in ut neque. Nunc sed orci vulputate ligula pretium mattis. Ut euismod arcu consequat sapien malesuada.',
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
