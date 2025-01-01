'use client';

import { Form, Input, Button } from 'antd';
import { Blog } from '@/types';
import { postBlog } from '@/api';
import styles from './page.module.css';

export default function PostsPage({ successCallback }) {
    const [form] = Form.useForm();

    const handleSubmit = async (values: Blog) => {
        const { err } = await postBlog(values);

        if(err) {
            return;
        }
        form.resetFields();
        successCallback?.();
    };

    return (
        <div className={styles['editor-container']}>
            <Form form={form} onFinish={handleSubmit} layout="horizontal">
                <Form.Item name="title" label="标题" rules={[{ required: true, message: '请输入标题' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="author" label="作者" rules={[{ required: true, message: '请输入作者' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="content" label="内容" rules={[{ required: true, message: '请输入内容' }]}>
                    <Input.TextArea rows={20} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="button" onClick={() => {
                        form.submit()
                    }}>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
} 