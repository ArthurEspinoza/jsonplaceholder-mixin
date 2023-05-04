export default {
  data: () => ({
    idUser: "2023-156",
  }),
  computed: {
    readUser: function () {
      return `User signed up on ${this.idUser.split("-")[0]} with an id ${
        this.idUser.split("-")[1]
      }`;
    },
  },
  methods: {
    getPosts: function () {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => {
          console.log(posts);
        });
    },
  },
};
