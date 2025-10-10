from django.apps import apps

# Check all app configurations
print("All installed apps and their labels:")
for app_config in apps.get_app_configs():
    print(f"  {app_config.name:40} -> Label: '{app_config.label}'")

# Find duplicates
from collections import Counter
labels = [app.label for app in apps.get_app_configs()]
duplicates = [label for label, count in Counter(labels).items() if count > 1]
print(f"\nDuplicate labels: {duplicates}")

# Show which apps share duplicate labels
for label in duplicates:
    apps_with_label = [app.name for app in apps.get_app_configs() if app.label == label]
    print(f"Label '{label}' is used by: {apps_with_label}")