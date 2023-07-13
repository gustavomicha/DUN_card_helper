import os

folder_path = "ENG/items/relics"#"items/distancia_y_arrojadizas"

file_paths = []

for root, dirs, files in os.walk(folder_path):
    for file in files:
        file_path = os.path.join(root, file)
        file_path = file_path.replace("\\", "/")  # Replace backslashes with forward slashes
        if "dorso" not in file_path:
            file_paths.append(file_path)

print(file_paths)

