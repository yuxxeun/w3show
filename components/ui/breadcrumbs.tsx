"use client"
import { IconChevronLgRight } from "justd-icons"
import { createContext, use } from "react"
import type { BreadcrumbProps, BreadcrumbsProps, LinkProps } from "react-aria-components"
import { Breadcrumb, Breadcrumbs as BreadcrumbsPrimitive } from "react-aria-components"
import { twMerge } from "tailwind-merge"
import { Link } from "./link"
import { composeTailwindRenderProps } from "./primitive"

type BreadcrumbsContextProps = { separator?: "chevron" | "slash" | boolean }
const BreadcrumbsProvider = createContext<BreadcrumbsContextProps>({
  separator: "chevron",
})

const Breadcrumbs = <T extends object>({
  className,
  ...props
}: BreadcrumbsProps<T> & BreadcrumbsContextProps) => {
  return (
    <BreadcrumbsProvider value={{ separator: props.separator }}>
      <BreadcrumbsPrimitive {...props} className={twMerge("flex items-center gap-2", className)} />
    </BreadcrumbsProvider>
  )
}

interface BreadcrumbsItemProps extends BreadcrumbProps, BreadcrumbsContextProps {
  href?: string
}

const BreadcrumbsItem = ({
  href,
  separator = true,
  className,
  ...props
}: BreadcrumbsItemProps & Partial<Omit<LinkProps, "className">>) => {
  const { separator: contextSeparator } = use(BreadcrumbsProvider)
  separator = contextSeparator ?? separator
  const separatorValue = separator === true ? "chevron" : separator

  return (
    <Breadcrumb
      {...props}
      className={composeTailwindRenderProps(className, "flex items-center gap-2 text-sm")}
    >
      {({ isCurrent }) => (
        <>
          <Link href={href} {...props} />
          {!isCurrent && separator !== false && <Separator separator={separatorValue} />}
        </>
      )}
    </Breadcrumb>
  )
}

const Separator = ({
  separator = "chevron",
}: { separator?: BreadcrumbsItemProps["separator"] }) => {
  return (
    <span className="*:shrink-0 *:text-muted-fg *:data-[slot=icon]:size-3.5">
      {separator === "chevron" && <IconChevronLgRight />}
      {separator === "slash" && <span className="text-muted-fg">/</span>}
    </span>
  )
}

Breadcrumbs.Item = BreadcrumbsItem

export type { BreadcrumbsProps, BreadcrumbsItemProps }
export { Breadcrumbs, BreadcrumbsItem }
