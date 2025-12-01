import { useTransform, MotionValue } from "framer-motion";

/**
 * Creates a 3D rotation transform based on scroll position
 * @param scrollYProgress MotionValue from useScroll()
 * @param range Range of scroll progress [start, end]
 * @param degrees Range of rotation degrees [start, end]
 */
export const use3DRotation = (
    scrollYProgress: MotionValue<number>,
    range: [number, number] = [0, 1],
    degrees: [number, number] = [0, 15]
) => {
    return useTransform(scrollYProgress, range, degrees);
};

/**
 * Creates a parallax effect for floating elements
 * @param scrollYProgress MotionValue from useScroll()
 * @param distance Distance to move in pixels
 */
export const useParallax = (
    scrollYProgress: MotionValue<number>,
    distance: number
) => {
    return useTransform(scrollYProgress, [0, 1], [0, distance]);
};

/**
 * Calculates opacity for fade-in/out effects
 */
export const useFade = (
    scrollYProgress: MotionValue<number>,
    range: [number, number, number, number] = [0, 0.2, 0.8, 1]
) => {
    return useTransform(scrollYProgress, range, [0, 1, 1, 0]);
};
