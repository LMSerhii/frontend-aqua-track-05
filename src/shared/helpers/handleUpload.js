export const uploadCloudinary = async file => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    formData.append('upload_preset', 'ylx3q541');

    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dci7ufqsp/image/upload',
      {
        method: 'post',
        body: formData,
      }
    );

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Ошибка загрузки изображения:', error);
  }
};
