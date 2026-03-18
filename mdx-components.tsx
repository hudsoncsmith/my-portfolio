import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  }
}
