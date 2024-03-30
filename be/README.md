# My Django REST API Project

This project is a backend service that handles data processing and inference using Django REST.

## Getting Started

Below are the instructions to set up your development environment and run the server.

### Prerequisites

- Python (3.10 or higher)
- pip (or conda if you prefer)

### Installation

1. Clone the master repository:

   ```bash
   git clone https://your-repository-url.git
   cd be
   ```

2. Set up a virtual environemnt:

   2.1 With venv and pip:

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   pip install -r requirements.txt
   ```

   2.2 With Conda/Miniconda:

   ```bash
   conda env create -f environment.yml
   conda activate django
   ```

### Development

1. Go to be folder:

  ```bash
  cd be
  ```

2. Run manage.py:

  ```bash
  python manage.py runserver
  ```

Once the server is running, you can access the API at http://127.0.0.1:8000.

## Main focus
├── [requirements.txt](/be/requirements.txt)
├── [environemnt.yml](/be/environment.yml)
├── data_inference/
│ ├── [views.py](/be/data_inference/views.py)
│ └── utils/
│ │  └── [data_utils.py](/be/data_inference/utils/data_utils.py)

## Lacking parts

- [ ] Upload processed file to a cloud service like S3 (currently, it is saved to [be/media](/be/media/))
- [ ] Handle script in a subprocess (still need contemplating since the script needs to somehow push updated data to the user as well..)

