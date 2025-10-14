import React, { useState, useRef } from "react";
import { Button, Modal, Form, Input, message } from "antd";

export default function AddItemModal() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  // Modal нээх
  const showModal = () => {
    form.resetFields(); // шинэ нэмэлт тул form-ыг цэвэрлэе
    setVisible(true);
  };

  // Modal хаах
  const handleCancel = () => {
    setVisible(false);
  };

  // Form submit
  const onFinish = async (values) => {
    setConfirmLoading(true);
    try {
      // Жишээ: API-рүү POST хийх
      // await fetch("/api/items", { method: "POST", body: JSON.stringify(values), headers: { "Content-Type": "application/json" }});

      // Симуляци
      await new Promise((r) => setTimeout(r, 800));

      message.success("Амжилттай нэмэгдлээ");
      setVisible(false);
      form.resetFields();
      // Хэрэв list-ийг шинэчилж харуулах бол энд callback дуудах
    } catch (err) {
      console.error(err);
      message.error("Алдаа гарлаа");
    } finally {
      setConfirmLoading(false);
    }
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Нэмэх
      </Button>

      <Modal
        title="Шинэ бүртгэл нэмэх"
        visible={visible}
        onCancel={handleCancel}
        footer={null} // footer-г Form-ийн товчлуураар орлуулах
        destroyOnClose={true} // хаагдсан үед DOM-ыг устгах (form state цэвэрлэгдэнэ)
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Нэр"
            rules={[{ required: true, message: "Нэр оруулна уу" }]}
          >
            <Input placeholder="Нэр" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Тайлбар"
            rules={[{ required: true, message: "Тайлбар оруулна уу" }]}
          >
            <Input.TextArea rows={4} placeholder="Тайлбар" />
          </Form.Item>

          <Form.Item>
            <div
              style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}
            >
              <Button onClick={handleCancel}>Буцах</Button>
              <Button type="primary" htmlType="submit" loading={confirmLoading}>
                Хадгалах
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
