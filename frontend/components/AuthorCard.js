//All necessary imports for this javascript
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import React, { Component } from "react";
import styles from "../styles/blog-post.module.css";
import Image from "next/image";
class AuthorCard extends Component {
  render() {
    return (
      <div className={styles.authorRow}>
        {/*for the blog post author*/}
        {Object.keys(this.props.authors).map((key, index) => (
          <div key={index} className={styles.authorElement}>
            <div className={styles.authorImg}>
              <img
                src={this.props.authors[key][0]}
                className={this.props.authors[key][1]}
                alt={key}
              />
            </div>
            <div className={[styles.title, styles.authorName].join(" ")}>
              {this.props.authors[key][2]}
            </div>
          </div>
        ))}
        {/*End of blog posts*/}
      </div>
    );
  }
}
export default AuthorCard;
