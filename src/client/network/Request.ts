export class Request {

    /**
     * make an asynchronus get request to the given url
     * and returns a blob instance
     *
     * @param path the url
     */
    public static async getBinary(path: string): Promise<Blob> {

        return new Promise<Blob>(resolve => {

            // create xhr instance and set properties
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.open('GET', path);

            // register finish event
            xhr.onload = () => {

                // create the blob reader
                let reader = new FileReader();
                reader.onloadend = () => {

                    resolve(<Blob>reader.result);
                }
                reader.readAsDataURL(xhr.response);
            };

            // send the request
            xhr.send();
        });
    }
}