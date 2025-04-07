import { useGlobalContext } from './context'
import sublinks from './data'
const Submenu = () => {
  const { pageId } = useGlobalContext()
  const currentPage = sublinks.find((item) => item.pageId === pageId)

  return (
    <div className={currentPage ? 'show-submenu submenu' : 'submenu'}>
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((item) => {
          const { id, url, label, icon } = item
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
export default Submenu
