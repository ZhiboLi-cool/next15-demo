'use client';

import { useState, useEffect } from 'react';
import { Blog } from '@/types';
import { getAllData } from '@/api';
import PostsPage from './posts/page';
import styles from "./page.module.css";

export default function HomePage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchData = async () => {
    const { res } = await getAllData();
    setBlogs(res?.data || []);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className={styles['container']}>
      <div id="editor" className={styles['editor-container']}>
        <PostsPage successCallback={fetchData} />
      </div>
      <div className={styles['list-container']}>
        <div id="searchbox" className={styles['list-searchbox']}></div>
        <div className={styles['list-operation']}>
          <button className={styles['list-ope-button']} onClick={fetchData}>刷新</button>
        </div>
        <div className={styles['list']}>
          {
            blogs.map(item => {
              return (
                <div key={item.id} className={styles['list-item']}>
                  <div>
                    <div style={{ marginBottom: 8 }}>
                      <span className={styles['list-item--title']}>{item.title}</span>
                      {!!item.updated_time ? <span className={styles['list-item--time']}>-&nbsp;{item.updated_time}</span> : null}
                    </div>
                    <div className={styles['list-item--content']}>
                      {item.content}
                    </div>
                  </div>
                  <div className={styles['list-item--ope']}>
                    <button>del</button>
                    <button>edit</button>
                    <button>view</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
