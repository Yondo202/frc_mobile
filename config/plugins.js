module.exports = {
    upload: {
        provider: 'google-cloud-storage',
        providerOptions: {
            bucketName: 'frcmobile',
            publicFiles: true,
            uniform: false,
            serviceAccount: {
                "type": "service_account",
                "project_id": "studied-acumen-288011",
                "private_key_id": "c36094eabcaf0fc7458cc9b157686e4327f655f1",
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCq42KIJMK+23qo\nyCuyWEDybtetobfyPw4mpC4SD4Zia7qNE2OWK+2lm2NOSgfCpQNTtZvbadUwAdpR\nwBo/2xBCaDU9Fsn/ll7VZ0icARUy62TfxZ2PgIIA5U4DQ1mpvleVu2rq6xWLOdvY\nthi5FqTN3+m2bEeWDO08DATrdx/2DZKUtu9goSv3dLPSvNqAlhLkGuypBduI0LNJ\nDQuefXVZ1S7XMow5Np4iSJASChTRIuEEinuFb76U3QQnr0ihW8tuR6/YG5SzaCvu\n7pLpWzP183D2G+vmcNlEprW/GpDb05coTlWQ82Cp6/SzF+2Mh85V4fdJo34EEmGN\nfdGYB/5/AgMBAAECggEACIt4KNCVwE9fMcNYlAFftf+e3zq/5OgMQBhjiVmnYZJ7\ncIRwrVii+G3tqEOBYdU4dl4VXgJLu6vMC9xsM5czl+54Awb5sMMHGOqiMdLICZTF\npX7PIxbM6ViN7xHWEOvIm18UuIxqtlx9RrfMQq0ELpssp4eAiNs6nY8IS/HX8kik\nbv6g42LC8bOqt7c0Jg5kLV2BLYMGo+WbFH0NrM++ihRo9d0Fxm2ttwymt2LsJqOB\n6OXFLLgFnP5jCE6rDbBF6/EOchSdIWcNOJjFrsL/ENUe0ZOsyd7ijUAAU6V2Qexe\nEvs23wHJiz//u22GMsV6nenXNls9HOMOWZyb2VBjeQKBgQDnNd/ImGJDM5chjfF0\n+paXRH4Ksl/Av4skOKVxmJjUPpNcnmXDsj5wtOA+4e5IHHbJggT1RCZC3c86e2+w\n2TFzPnMHsUS+gDrP21YWNSCPV2ICaLXNKca0BNSJrYws/lLxQbmfjDIWjGfD0siZ\n+hG/7usv/5kiT5VOgO9hAlAoKwKBgQC9NdKNMlxBtTWUgRwG+kbd1vJhxFLRC/eY\nvl425iS9FlbpFvmnDnj8i5yFDouMNnTlZzRaFDJBb6bmwek96m9G5844gdg59Uqv\nJVRYLh8of+4wFG4jTa5ovBErjJyxkJVZoMwIGwvF7tYP9EnjIk5DQkozeGic2PUg\nbv25oh7k/QKBgQDWeVIqKLjV77BczufRhHZWwZFN6OML0GKI6gcGVfBGyfk2bDSo\nENr8/7wYeMnpmIXULMjenyYC1vDZJhGYchD9/0sDMrw7HoXvtF2p4gRfE0b2Rx2F\nwB/zc5uYTyV9wzk7VKWUy57W7c1/iDLPKnp2mXEPKEFr43jzxoTHbzbd2wKBgGDM\n/XiBcFOpmszsNOOY/dKXGpBMObZ7seOyWU8q9VbL7BD6USVXsSw7XQtxwpEsdye6\nYj1HoeJ6deAPCv5DR0T2aTndrDsStG/g4ELw7b3xnXF5slNbdcRdm0c1fCEYAGDH\ndDsdYyuTom6tI3QR5ApjCsVEb/j2wooiXqqvN7EdAoGALQddR43Ye9NaceWA4rlC\nq72m4zukOy7A3/8WfWSqhq33T/j6qz6f02RzvsmT+N9fpVKQyc83wY4UgxYYeBss\n72rZSBDUzaacJ3yUve82n8kGoDS8hXwgqLLRsBIt/d6Sj4cziuBenpT11+m6MrDB\nIrffCpEuC/7WZP75PHK7ytI=\n-----END PRIVATE KEY-----\n",
                "client_email": "my-first-project@studied-acumen-288011.iam.gserviceaccount.com",
                "client_id": "108593795555271910048",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/my-first-project%40studied-acumen-288011.iam.gserviceaccount.com"
              }, // replace `{}` with your serviceAccount JSON object
            baseUrl: 'https://storage.googleapis.com/frcmobile',
            basePath: '/',
        },
      },
    //...
}