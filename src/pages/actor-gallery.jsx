import React, { useState } from "react"
import Layout from "../components/Layout/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import styles from "../styles/gallery.module.scss"
import Masonry from "react-masonry-css"
import Dialog from '@material-ui/core/Dialog';
import Img from "gatsby-image"

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Gallery = (props) => {
  const [visible, setVisible] = useState(false);
  const [clickedUrl, setClickedUrl] = useState('');

  const { allImageSharp: { edges: images } } = useStaticQuery(
    graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `
  )

  const sortedImages = images.sort((a, b) => {
    const strA = Number(a.node.fluid.src.split('/')[a.node.fluid.src.split('/').length - 1].split('.')[0])
    const strB = Number(b.node.fluid.src.split('/')[b.node.fluid.src.split('/').length - 1].split('.')[0])
    if (strA > strB) return 1
    if (strA < strB) return -1
    return 0
  })

  const onClose = () => {
    setVisible(false)
    setClickedUrl('')
  }
  const onOpen = (url) => {
    setVisible(true)
    setClickedUrl(url)
  }
  return (
      <Layout>
        <div className={styles.gallery_container}>
           <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.my_masonry_grid}
        columnClassName={styles.my_masonry_grid_column}
      >
        {sortedImages.map((image) => (
          <div style={{ width: '100%' }} onClick={() => onOpen(image.node.fluid.src)}>
            <Img
              alt="pau requesens"
              fluid={image.node.fluid}
            />
          </div>
        ))}
      </Masonry>
      <Dialog
      className={styles.dialog}
        open={visible}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <img className={styles.img} alt="" src={clickedUrl} />
      </Dialog>
      <Link to="/">- Go back -</Link>
      </div>
      </Layout>
  )
}

export default Gallery
