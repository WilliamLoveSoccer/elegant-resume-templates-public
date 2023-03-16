import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStoreDispatch } from '../../../hooks/useStoreDispatch';
import { useContactState } from '../../../hooks/useStoreState';
import styles from './Photo.module.css';

const Photo = () => {
    const { t } = useTranslation();
    const dispatch = useStoreDispatch();
    const { photo } = useContactState();
    const maxPhotoSize = 300; //300KB

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
        });
    };

    const handleChange = (e) => {
        const photoUploadPath = e.target.value;
        const photo = e.target.files[0];
        if (photoUploadPath !== '') {
            if (isPhotoValid(photo, photoUploadPath)) uploadPhoto(photo);
        }
    };

    const isPhotoValid = (photo, photoUploadPath) => {
        const extension = photoUploadPath.substring(photoUploadPath.lastIndexOf('.') + 1).toLowerCase();
        if (extension === 'png' || extension === 'jpeg' || extension === 'jpg') {
            if (typeof photo !== 'undefined') {
                const size = parseFloat(photo.size / 1024).toFixed(2);
                if (size < maxPhotoSize) {
                    return true;
                } else {
                    alert(`${t('photo.tooltips.fileTooBig')} 300kb.`);
                    return false;
                }
            }
        } else {
            alert(t('photo.tooltips.wrongFileType'));
            return false;
        }
    };

    const uploadPhoto = (photo) => {
        getBase64(photo).then((base64Photo) => {
            dispatch({ entity: 'contact', action: 'updateContactPhoto', payload: base64Photo });
            console.log('test');
        });
    };

    return (
        <div>
            <input id="photoUpload" type="file" onChange={handleChange} hidden />
            <label htmlFor="photoUpload">
                {photo.length > 0 ? (
                    <div style={{ width: '100px', height: '128px' }} className="er-flex er-items-center er-justify-center">
                        <img src={photo} alt="" className="er-cursor-pointer" />
                    </div>
                ) : (
                    <div className={styles.photo} style={{ width: '100px', height: '128px' }}>
                        <div>
                            <p className="er-mb-3">{t('photo.tooltips.uploadPhotograph')}</p>
                            <p className="er-text-xs">{t('photo.tooltips.photoRequirement')}</p>
                        </div>
                    </div>
                )}
            </label>
        </div>
    );
};

export default Photo;
