export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605c7c3f8ea01000ba77eab5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-njk9uvp5",
                  apiId: "5b7d26cc-9c2d-485c-86cf-90566a300914",
                },
                {
                  buildHookId: "605c7c3f5a958a0083ad2a45",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-j9rufg4k",
                  apiId: "bda96a05-da4c-436e-8c75-57218b9c2ae8",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/evettech/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-j9rufg4k.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
