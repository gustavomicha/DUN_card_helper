import os
import requests

# Define the base URL and the range of numbers
# base_url = "https://worldofarasca.dungeonuniversalis.com/imagenes/magias"
base_url = "https://worldofarasca.dungeonuniversalis.com/imagenes/mercenarios/"
start_num = 1
end_num = 50
destination_folder = "assets/images/ESP/downloaded/"

# Create the destination folder if it does not exist
if not os.path.exists(destination_folder):
    os.makedirs(destination_folder)

# Iterate over the range of numbers
for num in range(start_num, end_num + 1):
    # Construct the image URL
    image_url = f"{base_url}/{num}/{num}_en.jpg"
    
    # Attempt to download the image
    try:
        response = requests.get(image_url)
        response.raise_for_status()  # Raise an error for bad status codes

        # Save the image
        with open(os.path.join(destination_folder, f"{num}.jpg"), 'wb') as file:
            file.write(response.content)
        print(f"Downloaded image {num}.jpg")
    except requests.exceptions.RequestException as e:
        print(f"Failed to download image {num}.jpg: {e}")

print("Image download completed.")
