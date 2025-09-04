import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Share } from "@capacitor/share";

const share = async () => {
    console.log('share');

    await Share.share({
        title:'Mariam YT Channel',
        text: 'Apprenez à contruire une application mobile',
        url: 'https://mariamsanoko.github.io/appCoach/blog',
        dialogTitle: 'Share with friends',
    });    
};

const button = document.querySelector('button.share-button');
button!.addEventListener('click', share);


const captureImage = async () => {
      console.log('captureImage');

    const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        source: CameraSource.Prompt,
        resultType: CameraResultType.Base64,
    });

    capacitorImage!.src ='data:image/jpeg;base64,' + image.base64String;
    
};

const camButton = document.querySelector('button.camer-button');
camButton!.addEventListener('click', captureImage);

const capacitorImage = document.querySelector<any>('img.capacitorimage');