import random

from core.constants import ADJECTIVES, ANIMALS


def generate_pseudonim():
    adjective = random.choice(ADJECTIVES)
    animal = random.choice(ANIMALS)
    return f"{adjective.capitalize()} {animal.capitalize()}"
