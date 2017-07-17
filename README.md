# Optimizing webpack 3 performance for the front-end

Sample code for a blog post on optimizing webpack performance.

The following techniques yield the following size reductions. Some techniques, like [deterministic hashes](https://webpack.js.org/guides/caching/#deterministic-hashes), don’t affect the bundle size, but contribute in other harder-to-measure ways such as caching.

| Technique                                                   | Entry size   |  gzipped | Savings from previous step |
|-------------------------------------------------------------|-------------:|---------:|---------------------------:|
| **[Base App](./0-base-app)**                                |     `2.5 MB` | `525 kB` |                          — |
| **[Scope Hoisting](./1-scope-hoisting)**                    |     `2.5 MB` | `525 kB` |                          — |
| **Uglification** of base app via `webpack -p`               |       `1 MB` | `266 kB` |                   + 50–60% |
| **[Dynamic import](./3-dynamic-import)**                    |     `229 kB` |  `70 kB` |                   + 70–75% |
| **[Deterministic Hashes](./4-deterministic-hashes)**        |            — |        — |                          — |
| **[Commons Chunk Plugin](./5-commons-chunk)** †             |     `230 kB` |  `71 kB` |                       – 1% |
| **[webpack Offline Plugin](./6-offline-plugin)**            |            — |        — |                          — |
| **[webpack Bundle Analyzer](./7-webpack-bundle-analyzer)**‡ |            — |        — |                            |

_† The Commons Chunk Plugin technique split one entry file into 2, and the
combined size of both is listed._

_‡ The Bundle Analyzer technique saved `161 kB` on a particular request. This
is significant savings even if it doesn’t apply to 100% of users._

---

For the full explanation, see the blog post.
