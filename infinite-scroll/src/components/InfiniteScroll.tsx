import { useCallback, useEffect, useRef, useState } from "react"

const InfiniteScroll = () => {

  const [posts, setPosts] = useState<{
    id: string;
    title: string;
  }[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const observer = useRef()

  const lastElementRef = useCallback((node: HTMLSpanElement) => {

    if (loading) return
    if (observer?.current) (observer as {
      current: {
        disconnect: () => void
      }
    })?.current?.disconnect()

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setPage(page + 1)
      }
    })

    if (node) (observer as {
      current: {
        observe: (node: HTMLSpanElement) => void
      }
    }).current.observe(node)

  }, [loading])


  const fetchPosts = async (pageNo: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNo}&_limit=10`)
    const data = await res?.json();
    return data
  }

  const loadData = async () => {
    setLoading(true)
    try {
      const newPosts = await fetchPosts(page)
      setPosts(prev => [...prev, ...newPosts])
    } catch {
      alert("Error occured")
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [page])


  return (
    <div>
      <h1>Your Feed</h1>
      <div className="flex flex-col gap-8">
        {
          posts?.length && posts?.map((post: {
            id: string;
            title: string
          }, index: number) => (
            <span ref={posts?.length === index + 1 ? lastElementRef : null} className=" bg-green-600 p-2 m-4" key={post?.id + index}>{post?.id} -- {post.title}</span>
          ))
        }
      </div>
      {
        loading && <span>Loading .....</span>
      }
    </div>
  )
}
export default InfiniteScroll