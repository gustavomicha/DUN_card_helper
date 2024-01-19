import os

# folder_path = "assets/images/ESP/encuentros/castillo_exp"

# file_paths = []

# for root, dirs, files in os.walk(folder_path):
#     for file in files:
#         file_path = os.path.join(root, file)
#         file_path = file_path.replace("\\", "/")  # Replace backslashes with forward slashes
#         if ("dorso" and "back") not in file_path:
#             file_paths.append(file_path)

# print(file_paths)

## To see all cards under each subfolder
folder_path = "assets/images/ESP/hechizos_exp"
output_string = ""

for folder_name in os.listdir(folder_path):
    folder_dir = os.path.join(folder_path, folder_name)
    if os.path.isdir(folder_dir):
        image_files = os.listdir(folder_dir)
        image_list = [os.path.join(folder_dir, image) for image in image_files]
        output_string += f"var {folder_name}Images = {image_list};\n"

print(output_string)